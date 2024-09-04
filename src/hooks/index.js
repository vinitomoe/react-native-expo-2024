import { Text, View } from "react-native";
import { AuthProvider } from "./Auth";
import { FontProvider } from "./Font";
import { DataProvider } from "./Data";

export function AppProvider({ children }) {
    return( 
    <FontProvider>
        <DataProvider>
        <AuthProvider>{children}</AuthProvider>
        </DataProvider>
        </FontProvider>
    );
}