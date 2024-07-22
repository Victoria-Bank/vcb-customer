import React from "react";
import Styles from "./dashboard.module.css";
import Card from "../components/Card/Card";
import { CgClipboard } from "react-icons/cg";

const Dashboard = () => {
	return (
		<div className={Styles.main_home}>
			<div className={Styles.shots}>
				<div className={Styles.select_account}>
					<select className={Styles.accounts}>
						<optgroup label="Numbers" className={Styles.green}></optgroup>
					</select>
				</div>
				<Card />
				<div className={Styles.pending_tasks}>
					<div className={Styles.task_pending}>
						<CgClipboard className="icons_pending" />
						<h4>Tasks Pending Approval</h4>
					</div>
					<div className={Styles.task_pending}>
						<CgClipboard className="icons_pending" />
						<h4>Limited Transactions</h4>
					</div>
					<div className={Styles.task_pending}>
						<CgClipboard className="icons_pending" />
						<h4>In Process Transactions</h4>
					</div>
					<div className={Styles.task_pending}>
						<CgClipboard className="icons_pending" />
						<h4>Rejected Transactions</h4>
					</div>
				</div>
			</div>
			<div className={Styles.shots_right}>
				<div className={Styles.welcome}>
					<div className={Styles.greetings_main}>
						<p className={Styles.greetings}>Welcome Back</p>
						{/* <h2>
							{session.user.entity.firstName}
							{session.user.entity.lastName}
						</h2> */}
					</div>
					<p className={Styles.lastlogin}>
						{/* Last Login: {new Date(session.user.lastLoginTime).toLocaleString()} */}
					</p>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Dashboard;
