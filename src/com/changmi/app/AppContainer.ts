
module game {

    export class AppContainer extends egret.Sprite {
        public lobbyScreen: LobbyScreen = new LobbyScreen();
        public gameScreen: GameScreen = new GameScreen();
        public loadingScreen: LoadScreen = new LoadScreen();

        public constructor() {
            super();
        }

        public enterLobbyScreen(){
            console.warn("进入大厅");
            this.removeChildren();
            this.addChild(this.lobbyScreen);
        }

        public enterLoadingScreen(){
            this.removeChildren();
            this.addChild(this.loadingScreen);
        }

        public enterGameScreen(){
            console.warn("进入游戏");
            this.removeChildren();
            this.addChild(this.gameScreen);
        }

        public showSettingWindow(data: any){

        }

        public showEndWindow(){

        }

    }
}