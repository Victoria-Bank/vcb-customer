"use client";
import styles from "./quicklinks.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { RiCloseLargeFill } from "react-icons/ri";
import AddBeneficiary from "./Modals/BeneficiaryModal";

export default function Quicklinks() {
	const [beneficiarymodal, setBeneficiaryModal] = useState(false);

	const toggleModal = () => {
		setBeneficiaryModal(!beneficiarymodal);
	};
	return (
		<div className={styles.quick_shots}>
			<div className={styles.box}>
				<Image
					src="/assets/images/beneficiary.svg"
					alt="Quicklink1"
					width={30}
					height={20}
					className={styles.services}
				/>
				<h4>Add Beneficiary</h4>
			</div>
			{beneficiarymodal && (
				<div className={styles.modal}>
					<div onClick={toggleModal} className={styles.overlay}></div>
					<div className={modal_content}>
						<AddBeneficiary />
						<button className={styles.close_modal} onClick={toggleModal}>
							<RiCloseLargeFill />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
