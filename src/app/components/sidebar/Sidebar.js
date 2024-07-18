"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./sidebar.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import {
	BiSolidDashboard,
	BiTask,
	BiSpreadsheet,
	BiTransfer,
	BiData,
	BiDetail,
} from "react-icons/bi";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Sidebar = () => {
	const [isCollapsedSidebar, setIsidebarcollapse] = useState(false);

	const toggleSidebarcollapseHandler = () => {
		setIsidebarcollapse((prev) => !prev);
	};
	return (
		<div className={styles.sidebar_wrapper}>
			<button className={styles.btn} onClick={toggleSidebarcollapseHandler}>
				{isCollapsedSidebar ? (
					<MdKeyboardArrowRight />
				) : (
					<MdKeyboardArrowLeft />
				)}
			</button>
			<aside className={styles.sidebar} data-collapse={isCollapsedSidebar}>
				<div className={styles.sidebar_header}>
					<Image
						src="/assets/images/vlogo.svg"
						alt="logo"
						width={40}
						height={40}
					/>
					<Image
						src="/assets/images/vb_logo.png"
						alt="logo"
						width={145}
						height={61}
					/>
				</div>
				<div className={styles.list_navs}>
					<div className={styles.top_navs}>
						<ul className={styles.sidebar_list}>
							<Link href="/dashboard">
								<li className={styles.sidebar_item}>
									<span className={styles.sidebar_icon}>
										<BiSolidDashboard />
										<span className={styles.sidebar_name}>Dashboard</span>
										<span className={styles.tooltiptext}>Dashboard</span>
									</span>
								</li>
							</Link>
							<Link href="/dashboard/tasks">
								<li className={styles.sidebar_item}>
									<span className={styles.sidebar_icon}>
										<BiTask />
										<span className={styles.sidebar_name}>Tasks</span>
										<span className={styles.tooltiptext}>Tasks</span>
									</span>
								</li>
							</Link>
							<Link href="/dashboard/accounts">
								<li className={styles.sidebar_item}>
									<span className={styles.sidebar_icon}>
										<BiSpreadsheet />
										<span className={styles.sidebar_name}>Account Summary</span>
										<span className={styles.tooltiptext}>Account Summary</span>
									</span>
								</li>
							</Link>
							<Link href="/dashboard/accounts">
								<li className={styles.sidebar_item}>
									<span className={styles.sidebar_icon}>
										<BiTransfer />
										<span className={styles.sidebar_name}>Transfers</span>
										<span className={styles.tooltiptext}>Transfers</span>
									</span>
								</li>
							</Link>

							<Link href="/dashboard/bulk_upload">
								<li className={styles.sidebar_item}>
									<span className={styles.sidebar_icon}>
										<BiData />
										<span className={styles.sidebar_name}>Bulk Upload</span>
										<span className={styles.tooltiptext}>Bulk Upload</span>
									</span>
								</li>
							</Link>
							<Link href="/dashboard/services">
								<li className={styles.sidebar_item}>
									<span className={styles.sidebar_icon}>
										<BiDetail />
										<span className={styles.sidebar_name}>Services</span>
										<span className={styles.tooltiptext}>Services</span>
									</span>
								</li>
							</Link>
							<Link href="/dashboard/logout">
								<li className={styles.sidebar_item}>
									<span className={styles.sidebar_icon}>
										<FaArrowRightToBracket />
										<span className={styles.sidebar_name}>Logout</span>
										<span className={styles.tooltiptext}>Logout</span>
									</span>
								</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className={styles.copyright}>
					<p>copyright, 2024</p>
					<p>Victoria Commercial Bank</p>
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
