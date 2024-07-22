import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

const Card = () => {
	return (
		<div className={styles.account_card}>
			<div className={styles.logo_chip}>
				<Image
					src="/assets/images/chip.svg"
					alt="Chip"
					width={30}
					height={40}
					className={styles.chiplogo_image}
				/>
				<Image
					src="/assets/images/vic_white.svg"
					alt="Chip"
					width={100}
					height={40}
					className={styles.viclogo_image}
				/>
			</div>
			<div className={styles.balance_card}>
				<div className={styles.mainbalance}>
					<p>
						Balance <span className={styles.balance}>$ 0.00</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
