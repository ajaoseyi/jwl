import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logos.svg";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const onSubmit = async () => {
		setLoading(true);
		const timeout = async () =>
			setTimeout(() => {
				if (
					email.toLocaleLowerCase() !== "abigailjones050@gmail.com" ||
					password !== "Bryanwife110"
				) {
					setError(true);
					setLoading(false);
				} else {
					navigate("/dashboard");
					setLoading(false);
				}
			}, 4000);
		await timeout();
	};
	return (
		<div className="bg-[#19173D] min-h-screen ">
			<div className="bg-[#262450] w-full py-2 px-5">
				<div className="flex gap-2 text-white items-center">
					<Logo width={48} />
					<p className="font-bold logo">Jwl Legal</p>
				</div>
			</div>
			<div className="mx-4 min-h-screen flex justify-center items-center">
				<div className="bg-[#262450] w-full shadow-2xl md:mx-96 text-white py-6 flex justify-center items-center rounded-2xl  ">
					<div className="w-full px-10">
						<label
							for="about"
							className="block text-sm font-medium leading-6 text-white"
						>
							Email
						</label>
						<div className="mt-2 mb-3">
							<input
								id="about"
								name="about"
								rows="3"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="block px-3 w-full rounded-md focus:outline-none border-0 py-2  text-white bg-[#19173D] shadow-sm  sm:text-sm sm:leading-6 "
							/>
						</div>
						<div>
							<label
								for="about"
								className="block text-sm font-medium leading-6 text-white "
							>
								Password
							</label>
							<div className="mt-2">
								<input
									type="password"
									rows="3"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="block w-full rounded-md px-3  focus:outline-none border-0 py-2  text-white bg-[#19173D] shadow-sm  sm:text-sm sm:leading-6 "
								/>
								{error && (
									<p className="text-red-600 text-xs mt-1 ">
										The email address you entered is invalid. Please check for
										typos and try again.
									</p>
								)}{" "}
							</div>
						</div>
						<button
							disabled={email === "" || password === "" || loading}
							onClick={onSubmit}
							className="text-white text-sm bg-[#7B78AA] px-5 py-2 rounded-lg mt-5 disabled:opacity-60"
						>
							{loading ? <Spinner size="sm" className="" /> : "Submit"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
