import styles from '@/styles/HeroBanner.module.css'
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className={styles.heroBanner}>
            <Image src={'https://nzxt.com/assets/cms/34299/1658894006-prebuilt-pcs-path-primary.png?auto=format&fit=max&h=900&w=672'} alt='image' width={700} height={500} />

            <div>
              <h1 className=' text-8xl text-white font-semibold leading-tight'>Build your <br/> Dream PC with us</h1>
            </div>
        </div>
    );
};

export default HeroBanner;