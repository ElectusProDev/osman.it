import { useEffect, useRef } from 'react';

export default function Modal({ title, children, onClose, wide = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const focused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      focused?.focus();
    };
  }, []);
  return <dialog ref={ref} className={`modal ${wide ? 'modal-wide' : ''}`} aria-labelledby="dialog-title" onCancel={onClose}
    onClick={event => { if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) onClose(); } }}>
    <div className="modal-header"><h2 id="dialog-title">{title}</h2><button className="icon-button close-button" onClick={onClose} aria-label="Close dialog">×</button></div>
    {children}
  </dialog>;
}
