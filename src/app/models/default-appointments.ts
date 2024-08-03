import { Appointment } from "./appointment.interfaces";

export const defaultAppointments: Appointment[] = [
    {
        id : 1,
        date: '7/29/2024',
        title : 'Appointment 1',
        desc: 'Reason 1',
        startTime: '04:30',
        endTime: '06:30',
        duration : 120,
    },
    {
        id : 2,
        date: '7/29/2024',
        title : 'Appointment 2',
        desc: 'Reason 2',
        startTime: '00:00',
        endTime: '01:00',
        duration : 60,
    },
    {
        id : 3,
        date: '7/30/2024',
        title : 'Appointment 3',
        desc: 'Reason 3',
        startTime: '00:45',
        endTime: '03:15',
        duration : 150,
    },
    {
        id : 4,
        date: '7/30/2024',
        title : 'Appointment 4',
        desc: 'Reason 4',
        startTime: '13:30',
        endTime : '16:30',
        duration : 180
    },
    {
        id : 5,
        date: '7/30/2024',
        title : 'Appointment 5',
        desc: 'Reason 5',
        startTime: '12:00',
        endTime: '12:45',
        duration : 45,
    },
]