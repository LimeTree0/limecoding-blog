// Add controls progressively: code remains readable without JavaScript.
export function enhanceCodeBlocks(root: ParentNode = document) {
    for (const pre of root.querySelectorAll<HTMLPreElement>(".prose pre")) {
        if (pre.parentElement?.classList.contains("code-block")) continue;
        const code = pre.querySelector("code");
        if (!code) continue;
        const block = document.createElement("div");
        block.className = "code-block";
        const toolbar = document.createElement("div");
        toolbar.className = "code-toolbar";
        const language = document.createElement("span");
        language.textContent = (pre.dataset.language ?? "code").toUpperCase();
        const button = document.createElement("button");
        button.type = "button";
        button.className = "copy-code";
        button.textContent = "코드 복사";
        const status = document.createElement("span");
        status.className = "copy-status";
        status.setAttribute("role", "status");
        let reset: ReturnType<typeof setTimeout>;
        button.addEventListener("click", async () => {
            clearTimeout(reset);
            button.disabled = true;
            try {
                await navigator.clipboard.writeText(code.textContent ?? "");
                button.textContent = "복사 완료";
                status.textContent = "코드를 클립보드에 복사했습니다.";
            } catch {
                button.textContent = "다시 복사";
                status.textContent = "복사하지 못했습니다. 코드를 직접 선택해 복사해 주세요.";
            } finally {
                button.disabled = false;
                reset = setTimeout(() => {
                    button.textContent = "코드 복사";
                    status.textContent = "";
                }, 4000);
            }
        });
        toolbar.append(language, button);
        pre.before(block);
        block.append(toolbar, pre, status);
    }
}
