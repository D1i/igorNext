import { createContext, ReactNode, useState } from "react";

export interface AppContextInterface {
  feedbackModal: boolean;
  setFeedbackModal: (status: boolean) => void;
}

export const initialContext: AppContextInterface = {
  feedbackModal: false,
  setFeedbackModal(status: boolean) {},
};

export const AppContext = createContext<AppContextInterface>(initialContext);

export function AppContextProvider({
  children,
}: AppContextInterface & { children: ReactNode }): JSX.Element {
  const [feedbackModalState, setFeedbackModalState] = useState<boolean>(
    initialContext.feedbackModal
  );
  const setFeedbackModal = (status: boolean) => setFeedbackModalState(status);

  return (
    <AppContext.Provider
      value={{ feedbackModal: feedbackModalState, setFeedbackModal }}
    >
      {children}
    </AppContext.Provider>
  );
}
