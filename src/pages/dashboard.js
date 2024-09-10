import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logos.svg";

function Dashboard() {
	const navigate = useNavigate();
	return (
		<div className="bg-[#19173D] h-screen overflow-hidden">
			<div className="bg-[#262450] flex items-center  justify-between w-full py-2 px-5">
				<div className="flex gap-2 items-center text-white">
					<Logo width={48} />
					<p className="font-bold logo">Jwl Legal</p>
				</div>
				<button
					onClick={() => navigate("/")}
					className="bg-[#19173D] h-fit rounded-xl text-white px-3 py-2 text-sm cursor-pointer"
				>
					Logout
				</button>
			</div>
			<div className="h-full  flex justify-center md:px-96 items-center mx-4">
				<div className="bg-[#262450] shadow-lg text-white w-full md:min-w-96 mid:min-h-96 min-h-64  flex justify-center items-center rounded-2xl md:px-24 ">
					<div>
						<div className="flex items-center gap-3">
							<p className="font-semibold text-lg text-center ">
								Available Balance :
							</p>
							<p className="font-medium ">$0</p>
						</div>
						<div className="flex items-center gap-3">
							<p className="font-semibold text-lg">Outstanding Balance :</p>
							<p className="font-medium">$3,150</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
