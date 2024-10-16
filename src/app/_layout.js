import { router, Stack, useSegments } from "expo-router";
import { AppProvider } from "../hooks";
import { useEffect } from "react";
import { useAuth } from "../hooks/Auth";


const StackLayout = () => {
     const { user } = useAuth();

     useEffect(() => {

          if (!user?.autenticated) {
               router.replace("signin")
              
               
          } else {
                    router.push("(protected)");
          }
     }, [user]);

     return (
          <Stack>
               <Stack.Screen name="signin" options={{headerShown: false}} />
               <Stack.Screen name="about" options={{headerShown: false}} />
               <Stack.Screen name="(protected)" options={{headerShown: false}} />
          </Stack>
     );
};
export default function Layout() {
     return (
          <AppProvider>
               <StackLayout />
          </AppProvider>
     );
}