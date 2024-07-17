"use client";
import React, { useState } from "react";
import styles from "./login.module.css";

import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

const Login = () => {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	return (
		<section className={styles.homelogin}>
			<div className={styles.left}>
				<h1>
					The Ultimate
					<br />
					<span>Mobile Banking</span>
					<br />
					Experience
				</h1>
			</div>
			<div className={styles.right}>
				<Image
					src="/assets/images/vcblogo.svg"
					alt="login"
					width={169}
					height={74}
				/>
				<h4>Sign in to your account</h4>
				<p> Sign in to continue. Do not share your password</p>
				<form className={styles.loginform}>
					<div className={styles.inputbox}>
						<input
							type="text"
							placeholder="User ID"
							name="userid"
							value={userId}
							onChange={(e) => setUserId(e.target.value)}
						/>
						<FaRegUserCircle />
					</div>
					<div className={styles.inputbox}>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<MdOutlineLock />
					</div>
					<button type="submit" className={styles.login_button}>
						Sign in
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
