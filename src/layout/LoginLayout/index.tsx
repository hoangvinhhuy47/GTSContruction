import { Outlet } from "react-router-dom";

interface Props {}
export const LoginLayout: React.FC<Props> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
