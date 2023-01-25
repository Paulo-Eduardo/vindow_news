import { useEffect } from "react";

import "./imgModal.css";

interface ImgModalProps {
	onClose: () => void;
	src: string;
}

export default function ImgModal({ onClose, src }: ImgModalProps) {
	useEffect(() => {
		document.addEventListener("keydown", (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		});
	}, []);
	return (
		<div className="img-modal">
			<div className="img-modal-header">
				<span className="img-modal-close-icon" onClick={onClose}>
					&times;
				</span>
			</div>
			<div className="img-modal-content">
				<img id="image" style={{ pointerEvents: "none" }} src={src} />
			</div>
		</div>
	);
}
