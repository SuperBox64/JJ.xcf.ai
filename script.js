    function copyText(text) {
        var btn = event.currentTarget;
        navigator.clipboard.writeText(text).then(function() {
            btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
            setTimeout(function() {
                btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
            }, 2000);
        });
    }
    function copyJJ() {
        var btn = event.currentTarget;
        var jjPlain = '<~morph{fib(n)}>>\n  <~when{n <lt> #2}>>\n    ~>yeet{n}\n  <~>>\n  ~>yeet{(~>invoke{fib}::with(n <-> #1)) <+> (~>invoke{fib}::with(n <-> #2))}\n<~>>';
        navigator.clipboard.writeText(jjPlain).then(function() {
            btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
            setTimeout(function() {
                btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
            }, 2000);
        });
    }
    function copyHomebrew() {
        copyText('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"');
    }
    (function() {
        var el = document.getElementById('footer-tagline');
        var isJJ = false;
        var animating = false;
        var humanText = el.getAttribute('data-human');
        var jjHtml = '<style>.jjc p.p1{margin:0;font:13px ui-monospace,"JetBrains Mono",Menlo,monospace;color:#fc5fa3}.jjc p.p2{margin:0;font:13px ui-monospace,"JetBrains Mono",Menlo,monospace;color:#d7d7d9}.jjc span.s1{color:#d7d7d9}.jjc span.s2{color:#d0bf69}.jjc span.s3{color:#fc5fa3}.jjc span.s4{color:#5b8d48}.jjc span.s5{color:#a167e6}</style>'
            + '<div class="jjc">'
            + '<p class="p1"><b>&lt;~morph{</b><span class="s1">fib(n)</span><b>}&gt;&gt;</b></p>'
            + '<p class="p1"><span class="s1">  </span><b>&lt;~when{</b><span class="s1">n &lt;lt&gt; </span><span class="s2">#2</span><b>}&gt;&gt;</b></p>'
            + '<p class="p2">    <span class="s3"><b>~&gt;yeet</b></span>{n}</p>'
            + '<p class="p1"><span class="s1">  </span><b>&lt;~&gt;&gt;</b></p>'
            + '<p class="p2">  <span class="s3"><b>~&gt;yeet</b></span>{(<span class="s3"><b>~&gt;invoke</b></span>{fib}<span class="s4">::</span><span class="s5">with</span>(n &lt;-&gt; <span class="s2">#1</span>)) &lt;+&gt; (<span class="s3"><b>~&gt;invoke</b></span>{fib}<span class="s4">::</span><span class="s5">with</span>(n &lt;-&gt; <span class="s2">#2</span>))}</p>'
            + '<p class="p1"><b>&lt;~&gt;&gt;</b></p>'
            + '</div>'
            + '<button class="copy-btn jj-copy-btn" onclick="copyJJ()" title="Copy to clipboard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>';
        function scramble(useJJ) {
            if (animating) return;
            animating = true;
            el.classList.add('scrambling');
            setTimeout(function() {
                el.textContent = '';
                if (useJJ) {
                    el.innerHTML = jjHtml;
                    el.classList.add('jj-mode');
                } else {
                    el.textContent = humanText;
                    el.classList.remove('jj-mode');
                }
                el.classList.remove('scrambling');
                animating = false;
            }, 200);
        }

        el.addEventListener('mouseenter', function() {
            if (!isJJ) { isJJ = true; scramble(true); }
        });

        el.addEventListener('mouseleave', function() {
            if (isJJ) { isJJ = false; scramble(false); }
        });
    })();
