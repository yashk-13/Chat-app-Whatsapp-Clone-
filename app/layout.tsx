import ActiveStatus from "@/components/ActiveStatus";
import AuthContext from "@/context/AuthContext";
import ThemeProvider from "@/context/ThemeProvider";
import ToastContainerBar from "@/context/ToastContainerBar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata = {
  title: "Whatsapp Clone",
  description: "Whatsapp Clone",
  icons:
    "https://icon2.cleanpng.com/20240205/zze/transparent-whatsapp-logo-green-circle-with-white-arrow-and-whatsapp-1710885812944.webp",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <AuthContext session={session}>
          <ThemeProvider>
            <ToastContainerBar />
            <ActiveStatus />
            {children}
          </ThemeProvider>
        </AuthContext>
      </body>
    </html>
  );
}
