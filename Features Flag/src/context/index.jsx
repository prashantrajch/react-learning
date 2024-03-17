import { createContext, useEffect, useState } from "react";
import feturesFlagsDataCall from "./Data";

export const FeaturFlagsContext = createContext(null);

export default function FeaturFlagGlobalState({ children }) {
    const [loading,setLoading] = useState(false);
    const[enabledFlags,setEnabledFlags] = useState({});
    
    async function fetchFeatureFlags(){
        try{
            setLoading(true);
            let response = await feturesFlagsDataCall();
            setEnabledFlags(response);
            setLoading(false);
        }
        catch{
            setLoading(true);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    },[])

  return <FeaturFlagsContext.Provider value={{loading,enabledFlags,setEnabledFlags}}>
    {children}
  </FeaturFlagsContext.Provider>;
}
