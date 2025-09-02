interface ProgressTrackerModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export default function ProgressTrackerModal({ children, open, onClose }: ProgressTrackerModalProps) {
    if (!open) return null
    return (
      <>
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"></div>
        <div className="fixed top-[50%] left-[50%] transform-[-50%] -translate-[50%] bg-white p-[50px] z-10 max-w-[600px]">
          {children} <br />
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mr-2.5 mt-2.5"
          >
            {/* close icon */}
            <img
              className="w-[30px] h-[30px]"
              src="https://i.ibb.co/0yhfxY9b/15711674-removebg-preview.png"
              alt=""
            />
          </button>
        </div>
      </>
    );
} 