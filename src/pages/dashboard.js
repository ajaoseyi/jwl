import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logos.svg";
import  Invoice from "../assets/invoice.png";


function Dashboard() {
	const navigate = useNavigate();
	  const handleDownload = () => {
			const link = document.createElement("a");
			link.href = Invoice; // Path to your PDF file (in public folder or external link)
			link.target = "_blank"; // Open in a new tab
		  link.download = "JWLLP.png"; // Suggested file name for download
		  document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		};
	return (
		<div className="bg-[#19173D] h-screen overflow-hidden">
			<div className="bg-[#262450] flex items-center  justify-between w-full py-2 px-5">
				<div className="flex gap-2 items-center text-white">
					<Logo width={48} />
					<p className="font-bold logo">Jwl Legal</p>
				</div>
				<button
					onClick={() => navigate("/")}
					className="bg-[#19173D] h-fit rounded-xl text-white px-3 py-2 text-sm cursor-pointer hover:opacity-75"
				>
					Logout
				</button>
			</div>
			<div className="h-full  flex justify-center md:px-96 items-center mx-4">
				<div className="bg-[#262450] shadow-lg text-white w-full md:min-w-96 mid:min-h-96 min-h-64 rounded-2xl">
					<div className="bg-[#0b0b18] flex justify-center py-6">
						<div className="">
							<div className="flex items-center gap-3">
								<p className="font-semibold text-lg text-center w-full">
									Available Balance :
								</p>
								<p className="font-medium ">$0</p>
							</div>
							<div className="flex items-center gap-3">
								<p className="font-semibold text-lg w-full">
									Outstanding Balance :
								</p>
								<p className="font-medium">$3,150</p>
							</div>
						</div>
					</div>
					<p className="flex justify-center items-center mt-8 mx-8 text-center">
						Please note that at least 80% of the outstanding retainer fee must
						be cleared before the day of verdict. The retainer fee is a
						statutory requirement and isn’t included in the legal fees
						associated with representation. It is paid directly to the law
						court.
					</p>
					<div className="flex justify-center my-5">
						<button
							onClick={handleDownload}
							className="bg-[#19173D] h-fit rounded-xl text-white px-3 py-2 text-sm cursor-pointer hover:opacity-75"
						>
							Download Invoice
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
