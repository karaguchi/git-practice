(function() {
    const css = `
        /* 全体の背景をダークグレーにし、文字を白にする */
        body, #root, #main, [class*="pageLayout"], [class*="app-module"] {
            background-color: #1a1a1a !important;
            color: #e0e0e0 !important;
        }
        /* 左側のトーク一覧・友達一覧エリア */
        [class*="chatlist-module"], [class*="friendlist-module"], [class*="navigation"] {
            background-color: #222222 !important;
            border-right: 1px solid #333333 !important;
        }
        .chatlistItem-module__description__JH3NE .chatlistItem-module__text__daDD3 {
            color: #555;
        }
        /* トークルームの背景 */
        [class*="chatroom-module"], [class*="chat_room"] {
            background-color: #1e1e1e !important;
        }
        .createChatButton-module__button_create__-BK-p {
            display: none;
        }
        .chatroomContent-module__content_area__gK6db .message_list:after {
            background-color: #77777733;
            border: none;
            color: #777;
        }
        .scrollDownButton-module__button_scroll_down__-XrLT {
            background-color: #444;
        }
        .chatlist-module__tab__xaUJd {
            border-bottom: 1px solid #111;
        }
        .chatroom-module__chatroom__eVUaK {
            border-left: 1px solid #111;
        }
        .chatroomHeader-module__badge__IJjLy {
            opacity: 0.2;
        }
        .fileMessageContent-module__inner__R34xN>.fileMessageContent-module__icon__u-cSf {
            border: 1px solid #444;
        }
        .chatlistItem-module__date__tG-MV, .folderTab-module__tab_item__7dbuI {
            color: #333;
        }
        .fileMessageContent-module__period__N2YdD, .fileMessageContent-module__size__0wDYo {
            color: #444;
        }
        .fileMessageContent-module__info__i7p9r .fileMessageContent-module__name__-GtzW {
            font-size: 12px;
            color: #555;
        }
        .textMessageContent-module__text__EFwEN a {
            color: green;
        }

        /* -------------------------------------------
           メッセージの吹き出し調整
        ------------------------------------------- */
        .textMessageContent-module__content_wrap__238E1,
         [class*=message][data-direction=reverse] .replyMessageContent-module__content_wrap__D0K-5:not([data-content-type=sticker]),
         [class*=message][data-direction=reverse]>[class*=content]>[class*=content]>[class*=content_inner]>.fileMessageContent-module__content_wrap__2Px8O,
         .replyMessageContent-module__content_wrap__D0K-5:not([data-content-type=sticker]) {
            background-color: #333;
            border-radius: 0;
        }
        .textMessageContent-module__content_wrap__238E1:before {
            display: none;
        }
        [class*=message][data-direction=reverse]>[class*=content]>[class*=content]>[class*=content_inner]>.textMessageContent-module__content_wrap__238E1 {
            background-color: #333;
        }

        /* -------------------------------------------
           【追加】画像を目立たなくする（ホバーで100%）
        ------------------------------------------- */
        /* アイコン、送信画像、スタンプ、広告などの画像全般を透過・暗転させる */
        img, [class*="avatar"], [class*="image_wrap"], [class*="thumbnail"] {
            opacity: 0.2 !important;
            transition: opacity 0.2s ease, filter 0.2s ease; /* なめらかに表示するアニメーション */
        }
        /* マウスホバー時だけ100%表示 */
        img:hover, [class*="avatar"]:hover, [class*="image_wrap"]:hover, [class*="thumbnail"]:hover {
            opacity: 1 !important;
            filter: grayscale(0%) !important;
        }
        .videoMessageContent-module__content_wrap__ffvJq, .imageMessageContent-module__content_wrap__bT-Si {
            background-color: transparent;
        }

        /* -------------------------------------------
           入力エリア
        ------------------------------------------- */
        [class*="input_area"], [class*="footer"] {
            background-color: #000000 !important;
            border-top: 1px solid #333333 !important;
        }
        textarea, input, [class*="textarea"], [class*="input"] {
            background-color: #000000 !important;
            color: #777 !important;
            border: 1px solid #333333 !important;
        }
        .searchInput-module__label__40CWI {
            background-color: transparent;
        }
        /* 選択されているトークやホバー時の背景 */
        [class*="selected"], [class*="active"], [class*="hover"] {
            background-color: #2d2d2d !important;
        }
        /* スクロールバー */
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
        .chatlist-module__search_box__enOMX.searchInput-module__input_box__vp6NF {
            display: none;
        }
    `;
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})();
