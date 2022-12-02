import {AppProps} from "next/app";
import Router from "next/router";
import React, {useEffect, useMemo} from "react";
import {Provider} from "react-redux";
import Script from "next/script";
import {ReactNotifications} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

import ProgressBar from "@badrap/bar-of-progress";
import {AppContextInterface, AppContextProvider, initialContext,} from "@context/app.context";
import {store, useAppSelector} from '../store';

import {CallSend, ShadowWrapper} from '@components/index'

import "../styles/globals.scss";

const progress = new ProgressBar({
    size: 2,
    color: "#b89b5e",
    className: "bar-of-progress",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const appHeight = () => {
    const doc: HTMLElement = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};

function MyAppContainer({Component, pageProps,}: AppProps & AppContextInterface): JSX.Element {
    const callSendIsOpen = useAppSelector((status) => status.callSend.isOpen)

    const callSend = useMemo(() => {
        console.log(callSendIsOpen)
        if (callSendIsOpen) {
            return (
                <ShadowWrapper>
                    <CallSend/>
                </ShadowWrapper>
            )
        }
    }, [callSendIsOpen])

    useEffect(() => {
        window.addEventListener("resize", appHeight);
    }, []);
    return (
        <>
            {callSend}
            <ReactNotifications/>
            <AppContextProvider {...initialContext}>
                <Component {...pageProps} />
                <Script id="yandex-analytics" strategy="afterInteractive">
                    {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(88749153, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
        `}
                </Script>
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/88749153"
                            style={{position: "absolute", left: "-9999px"}}
                            alt=""
                        />
                    </div>
                </noscript>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-FLZ386P33Y"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-FLZ386P33Y');
        `}
                </Script>
            </AppContextProvider>
        </>
    )
        ;
}

// MyAppReduxWrapper
function MyApp(props: AppProps & AppContextInterface): JSX.Element {
    return (
        <Provider store={store}>
            <MyAppContainer {...props}/>
        </Provider>
    )
}

export default MyApp;
