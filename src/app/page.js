'use client';

import * as React from 'react';
// import Form from 'react-bootstrap/Form';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import FontSelector from './FontSelector';
import Letter from './Letter';
import styles from './page.module.css';
import fin from '../../public/end.png';

export default function Tiff() {
  const [fontA, setFontA] = React.useState('Inter');
  const [fontB, setFontB] = React.useState('');
  const [letters, setLetters] = React.useState(['R', 'g', 'h', 'e']);

  React.useEffect(() => {
    (async () => {
      const WebFont = (await import('webfontloader')).default;
      WebFont.load({
        google: {
          families: [fontA, fontB],
        },
      });
    })();
  }, [fontA, fontB]);

  const handleEdit = (index, event) => {
    const newLetters = letters.slice();
    newLetters[index] = event.target.value;
    setLetters(newLetters);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Tiff - A type diff tool</title>
      </Head>
      <aside className={styles.ribbon}>
        <div className={styles.content}>
          <h1>Tiff</h1>
          <section>
            <p className={styles.subtitle}>
              A type diff tool that visually contrasts the differences between
              two fonts.
            </p>
            <p className={styles.disclaimer}>
              Currently supports fonts from the&nbsp;
              <Link href="https://www.google.com/fonts">Google Web Fonts</Link>
              &nbsp; library and any system fonts. Best if viewed on the latest
              version of modern browsers.
            </p>
          </section>
        </div>
      </aside>
      <main className={styles.primary}>
        <div className={styles.content}>
          <section className={styles.fontSelect}>
            <FontSelector
              autoFocus={false}
              defaultValue="Inter"
              label="Font A"
              className={styles.fontA}
              handleSelect={(value) => setFontA(value)}
            />
            <FontSelector
              autoFocus={true}
              label="Font B"
              className={styles.fontB}
              handleSelect={(value) => setFontB(value)}
            />
          </section>
          <section className={styles.fontDisplay}>
            <Letter value={letters[0]} fontA={fontA} fontB={fontB} />
            <Letter value={letters[1]} fontA={fontA} fontB={fontB} />
            <Letter value={letters[2]} fontA={fontA} fontB={fontB} />
            <Letter value={letters[3]} fontA={fontA} fontB={fontB} />
          </section>
          {/* <section className={styles.displayMode}>
            <Form.Switch />
          </section> */}
          <section className={styles.displayControl}>
            <p>Edit to see different letters</p>
            <div className={styles.testLetters}>
              <input
                className={styles.testLetter}
                maxLength={1}
                value={letters[0]}
                onChange={(e) => handleEdit(0, e)}
              ></input>
              <input
                className={styles.testLetter}
                maxLength={1}
                value={letters[1]}
                onChange={(e) => handleEdit(1, e)}
              ></input>
              <input
                className={styles.testLetter}
                maxLength={1}
                value={letters[2]}
                onChange={(e) => handleEdit(2, e)}
              ></input>
              <input
                className={styles.testLetter}
                maxLength={1}
                value={letters[3]}
                onChange={(e) => handleEdit(3, e)}
              ></input>
            </div>
            <p>
              or{' '}
              <span
                className={styles.reset}
                onClick={() => setLetters(['R', 'g', 'h', 'e'])}
              >
                reset
              </span>{' '}
              to default
            </p>
          </section>
          <section className={styles.footer}>
            <Image src={fin} alt="end of content" />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
