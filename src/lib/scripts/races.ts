import type { race } from "./types";

// store a list of track and road races for runners
const races: race[] = [
    {
        id: 'bos-mar',
        name: 'Boston Marathon',
        distance: 'Marathon',
        date: 'April 20, 2019',
        location: 'Boston, MA'
    },
    {
        id: 'chi-mar',
        name: 'Chicago Marathon',
        distance: 'Marathon',
        date: 'October 13, 2019',
        location: 'Chicago, IL'
    },
    {
        id: 'matt-5k',
        name: 'Mattapoisett 5K',
        distance: '5K',
        date: 'June 1, 2019',
        location: 'Mattapoisett, MA'
    },
    {
        id: 'new-bed-5k',
        name: 'New Bedford Half Marathon',
        distance: 'Half Marathon',
        date: 'May 18, 2019',
        location: 'New Bedford, MA'
    },
    {
        id: 'new-bed-track',
        name: 'New Bedford Track Meet',
        distance: 'Track',
        distances: ['100m', '200m', '400m', '800m', '1600m', '3200m', '100mh', '4x400m'],
        date: 'May 18, 2019',
        location: 'New Bedford, MA'
    }
];

export { races }