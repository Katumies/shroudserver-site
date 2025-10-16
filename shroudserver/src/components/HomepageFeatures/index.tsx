import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Development blogs',
    image: require('@site/static/img/feature_blog.jpg').default,
    description: (
      <>
        Find out what it takes to implement server for an MMORPG.
      </>
    ),
  },
  {
    title: 'Documentation',
    image: require('@site/static/img/feature_documentation.png').default,
    description: (
      <>
        Documentation for network protocol and server implementation.
      </>
    ),
  }, 
  {
    title: 'In progress',
    image: require('@site/static/img/feature_under_construction.png').default,
    description: (
      <>
        This site and the project is still in early stages. Patience is needed.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          <img src={image} alt={title} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
