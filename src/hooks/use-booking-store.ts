import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookingState {
    step: number;
    symptom: string;
    date: string | undefined;
    timeSlot: string;
    serviceType: string;
    form: {
        customer_name: string;
        customer_email: string;
        customer_phone: string;
        address: string;
        notes: string;
    };
    setStep: (step: number) => void;
    setSymptom: (symptom: string) => void;
    setDate: (date: string | undefined) => void;
    setTimeSlot: (timeSlot: string) => void;
    setServiceType: (serviceType: string) => void;
    setForm: (form: Partial<BookingState['form']>) => void;
    reset: () => void;
}

const initialState = {
    step: 1,
    symptom: "",
    date: undefined,
    timeSlot: "",
    serviceType: "",
    form: {
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        address: "",
        notes: "",
    },
};

export const useBookingStore = create<BookingState>()(
    persist(
        (set) => ({
            ...initialState,
            setStep: (step) => set({ step }),
            setSymptom: (symptom) => set({ symptom }),
            setDate: (date) => set({ date }),
            setTimeSlot: (timeSlot) => set({ timeSlot }),
            setServiceType: (serviceType) => set({ serviceType }),
            setForm: (formUpdate) =>
                set((state) => ({
                    form: { ...state.form, ...formUpdate },
                })),
            reset: () => set(initialState),
        }),
        {
            name: 'booking-storage',
        }
    )
);
