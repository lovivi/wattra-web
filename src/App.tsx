import { useEffect, useRef, useState } from 'react'
import Hero from './sections/Hero'
import TheProblem from './sections/TheProblem'
import TheGap from './sections/TheGap'
import Network from './sections/Network'
import TheEngines from './sections/TheEngines'
import Closing from './sections/Closing'
import Modal from './components/Modal'
import ManifestoModal from './components/ManifestoModal'
import JoinModal from './components/JoinModal'
import PartnerModal from './components/PartnerModal'
import Logo from './components/brand/Logo'

type ModalType = 'manifesto' | 'join' | 'partner' | null

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [modal, setModal] = useState<ModalType>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll('.section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { root: container, threshold: 0.15 }
    )

    sections.forEach((s) => observer.observe(s))

    const hero = container.querySelector('.hero-section')
    if (hero) setTimeout(() => hero.classList.add('active'), 100)

    const handleScroll = () => {
      setScrolled(container.scrollTop > 50)
    }
    container.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const openModal = (type: ModalType) => setModal(type)
  const closeModal = () => setModal(null)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-bg-deep/90 backdrop-blur-md border-b border-white/[0.04]' : 'bg-transparent'}`}>
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <Logo size="sm" showText={true} />
          <button onClick={() => openModal('join')} className="btn btn-ghost text-[0.7rem] py-2 px-4">
            Join the Network
          </button>
        </div>
      </nav>

      <div
        ref={containerRef}
        className="h-[100dvh] overflow-y-auto snap-y snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        <Hero onOpenManifesto={() => openModal('manifesto')} onOpenJoin={() => openModal('join')} />
        <TheProblem />
        <TheGap />
        <Network />
        <TheEngines />
        <Closing onOpenManifesto={() => openModal('manifesto')} onOpenJoin={() => openModal('join')} onOpenPartner={() => openModal('partner')} />
      </div>

      <Modal open={modal === 'manifesto'} onClose={closeModal} title="The WATTRA Manifesto">
        <ManifestoModal />
      </Modal>
      <Modal open={modal === 'join'} onClose={closeModal} title="Join the Network" maxWidth="480px">
        <JoinModal />
      </Modal>
      <Modal open={modal === 'partner'} onClose={closeModal} title="Partner with WATTRA" maxWidth="520px">
        <PartnerModal />
      </Modal>
    </>
  )
}
