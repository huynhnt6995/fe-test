import { ChangeEventHandler } from "react";
import { useTranslation } from "react-i18next";

import PrimaryButton from "../../components/buttons/PrimaryButton";

import Input from "../../components/inputs/Input";

interface Props {
  onLoginClick: () => void;
  username?: string;
  onUsernameChange?: ChangeEventHandler<HTMLInputElement>;
  password?: string;
  onPasswordChange?: ChangeEventHandler<HTMLInputElement>;
}

function LoginPage(props: Props) {
  const { onLoginClick, username, password, onUsernameChange, onPasswordChange } = props;
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="shadow flex flex-col p-4 rounded">
        <span className="mb-4 text-center">{t("login.login_page")}</span>

        <Input className="mb-2" label={t("login.username")} value={username} onChange={onUsernameChange} />
        <Input label={t("login.password")} value={password} onChange={onPasswordChange} />

        <div className="flex justify-center my-4">
          <PrimaryButton onClick={onLoginClick}>{t("login.login")}</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
