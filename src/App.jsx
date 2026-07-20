import { useRef, useState } from 'react'

const EMAIL = 'bretshilliday@gmail.com'

export default function App() {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  function copyWithExecCommand() {
    const textarea = document.createElement('textarea')
    textarea.value = EMAIL
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    textarea.remove()
    return ok
  }

  async function handleEmailClick(event) {
    let copiedNow = false
    try {
      await navigator.clipboard.writeText(EMAIL)
      copiedNow = true
    } catch {
      copiedNow = copyWithExecCommand()
    }
    if (!copiedNow) return // both copy paths unavailable — fall through to mailto:
    event.preventDefault()
    setCopied(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 2500)
  }

  return (
    <>
      <img className="hero" src="/banner.jpg" alt="Fly fishing in a mountain river" />
      <nav className="links">
        <a
          href="https://www.linkedin.com/in/bret-shilliday/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          in
        </a>
        <span className="sep">·</span>
        <a href="https://x.com/BretShilliday" target="_blank" rel="noreferrer" aria-label="X" title="X">
          x
        </a>
        <span className="sep">·</span>
        <a href={`mailto:${EMAIL}`} onClick={handleEmailClick} aria-label="Email" title="Copy email address">
          @
        </a>
      </nav>
      <div className={copied ? 'toast visible' : 'toast'} role="status">
        {EMAIL} — copied
      </div>
    </>
  )
}
