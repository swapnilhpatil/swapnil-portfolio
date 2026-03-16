export default function Background() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-col) 1px,transparent 1px),linear-gradient(90deg,var(--border-col) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="fixed rounded-full pointer-events-none z-0"
        style={{ width:600,height:600,background:"#4ade80",filter:"blur(120px)",opacity:0.10,top:-200,left:-100 }} />
      <div className="fixed rounded-full pointer-events-none z-0"
        style={{ width:500,height:500,background:"#22d3ee",filter:"blur(120px)",opacity:0.08,bottom:-100,right:-100 }} />
      <div className="fixed rounded-full pointer-events-none z-0"
        style={{ width:400,height:400,background:"#a78bfa",filter:"blur(120px)",opacity:0.07,top:"40%",left:"30%" }} />
    </>
  );
}
