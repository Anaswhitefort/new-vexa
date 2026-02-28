import Image from "next/image";
import logoWeleda from "../images/clients/weleda/logo-light.png";
import logoTwistshake from "../images/clients/twistshake/logo-light.png";
import logoJulianaXerez from "../images/clients/juliana-xerez/logo-light.png";
import logoTemai from "../images/clients/temai/logo-light.png";
import logoJustForMen from "../images/clients/just-for-men/logo-light.png";
import logoIhealth from "../images/clients/ihealth/logo-light.png";
import logoProPartsLight from "../images/clients/proparts/logo-light.png";
import logoAngelBridge from "../images/clients/angel-bridge/logo-light.png";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Proparts UAE", logoProPartsLight, { width: '50%', height: 'auto' }],
  ["Twistshake", logoTwistshake, { width: '50%', height: 'auto' }],
  ["Angel Bridge UAE", logoAngelBridge, { width: '50%', height: 'auto' }],
  ["JUST FOR MEN", logoJustForMen, { width: '50%', height: 'auto' }],
  ["Temai", logoTemai, { width: '50%', height: 'auto' }],
  ["Juliana Xerez Dubai", logoJulianaXerez, { width: '50%', height: 'auto' }],
  ["Weleda", logoWeleda, { width: '50%', height: 'auto' }],
  ["ihealth uae", logoIhealth, { width: '50%', height: 'auto' }],
];

const Clients = () => {
  return (
    <div className="mt-26 rounded-4xl bg-site bg-site-grain py-20 sm:mt-38 sm:py-32 lg:mt-58">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo, style]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized style={style} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
