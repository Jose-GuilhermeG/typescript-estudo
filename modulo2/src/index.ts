interface VideoElements{
    video :  HTMLVideoElement,
    playButton : HTMLButtonElement,
    stopButton : HTMLButtonElement,
    resetButton : HTMLButtonElement
}

interface VideoActions{
    play() : void,
    stop() : void,
    reset() : void ,
    startEvents() : void
}

interface IVideoPlay extends VideoElements , VideoActions{}

class VideoPlay implements IVideoPlay{
    constructor(
        public video : HTMLVideoElement,
        public playButton : HTMLButtonElement,
        public stopButton : HTMLButtonElement,
        public resetButton : HTMLButtonElement,
    ){}

    startEvents(): void {
        this.playButton.addEventListener("click",()=>{
            this.play()
        })

        this.stopButton.addEventListener("click",()=>{
            this.stop()
        })

        this.resetButton.addEventListener("click",()=>{
            this.reset()
        })
    }

    play(): void {
        this.video.play()
    }

    stop(): void {
        this.video.pause()
    }

    reset(): void {
        this.video.currentTime = 0
    }
    
}

const videoPlay = new VideoPlay(
    document.querySelector(".video") as HTMLVideoElement,
    document.querySelector(".play") as HTMLButtonElement,
    document.querySelector(".stop") as HTMLButtonElement,
    document.querySelector(".reset") as HTMLButtonElement,
)

videoPlay.startEvents()