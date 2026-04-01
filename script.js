function startCall() {
    let status = document.getElementById("status");

    status.innerText = "📡 Calling...";
    
    setTimeout(() => {
        status.innerText = "📶 Connected (SIP)";
    }, 2000);

    setTimeout(() => {
        status.innerText = "🎧 Voice Transfer (RTP)";
    }, 4000);
}