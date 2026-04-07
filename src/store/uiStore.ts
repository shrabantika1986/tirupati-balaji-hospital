import { create } from 'zustand'

interface UIState {
  mobileMenuOpen: boolean
  searchOpen: boolean
  activeDropdown: string | null
  setMobileMenuOpen: (open: boolean) => void
  setSearchOpen: (open: boolean) => void
  setActiveDropdown: (id: string | null) => void
  toggleMobileMenu: () => void
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  searchOpen: false,
  activeDropdown: null,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setSearchOpen: (open) => set({ searchOpen: open }),
  setActiveDropdown: (id) => set({ activeDropdown: id }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}))

// ─── Appointment Modal Store ──────────────────────────────────────────────────

interface AppointmentState {
  isOpen: boolean
  prefillDoctor?: string
  prefillDepartment?: string
  openModal: (prefill?: { doctor?: string; department?: string }) => void
  closeModal: () => void
}

export const useAppointmentStore = create<AppointmentState>((set) => ({
  isOpen: false,
  prefillDoctor: undefined,
  prefillDepartment: undefined,
  openModal: (prefill) =>
    set({
      isOpen: true,
      prefillDoctor: prefill?.doctor,
      prefillDepartment: prefill?.department,
    }),
  closeModal: () =>
    set({ isOpen: false, prefillDoctor: undefined, prefillDepartment: undefined }),
}))
