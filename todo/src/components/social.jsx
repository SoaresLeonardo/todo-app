import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import {
  SocialContainer,
  SocialNetWork,
} from '../assets/styles/socialContainer';

export default function Social() {
  return (
    <div>
      <SocialContainer>
        <SocialNetWork>
          <a
            href="https://github.com/SoaresLeonardo"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com/leosoareshenrique"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </SocialNetWork>
      </SocialContainer>
    </div>
  );
}
