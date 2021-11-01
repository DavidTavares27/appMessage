import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';

import styles from './styles.module.scss';

export function LoginBox() {
  //const signInURL = `https://github.com/login/oauth/autorize?scope=user&client_id=3f2557406e2a3dc1ca87`;
  const { signInUrl } = useContext(AuthContext);

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  )
}