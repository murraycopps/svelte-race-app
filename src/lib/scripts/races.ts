import type { race } from "./types";

// store a list of track and road races for runners
const races: race[] = [
    {
        id: 'bos-mar',
        name: 'Boston Marathon',
        distance: 'Marathon',
        date: 'April 20, 2019',
        location: 'Boston, MA',
        description: 'The Boston Marathon is an annual 26.2-mile (42.2 km) race held on Patriots\' Day in April, starting in Hopkinton, Massachusetts and ending in Boston. It is one of the oldest and most prestigious marathons in the world, attracting elite runners and thousands of participants from around the globe. The event is known for its challenging course, enthusiastic spectators, and patriotic themes, making it a beloved and iconic event in the running community.'
    },
    {
        id: 'chi-mar',
        name: 'Chicago Marathon',
        distance: 'Marathon',
        date: 'October 13, 2019',
        location: 'Chicago, IL',
        description: 'The Chicago Marathon is an annual 26.2-mile (42.2 km) race held in October in Chicago, Illinois. It is one of the largest marathons in the world, attracting participants from all over the globe and tens of thousands of spectators. The course takes runners through the heart of Chicago, showcasing some of the city\'s most famous landmarks and neighborhoods. The event is known for its flat and fast course, enthusiastic crowds, and exciting atmosphere, making it a popular destination for both elite runners and recreational participants.'

    },
    {
        id: 'matt-5k',
        name: 'Mattapoisett Road Race',
        distance: '5K',
        date: 'July 4, 2019',
        location: 'Mattapoisett, MA',
        description: 'The Mattapoisett Road Race is an annual 5-kilometer (3.1-mile) race held on July 4th in Mattapoisett, Massachusetts. It is a patriotic themed event held on Independence Day and is a local tradition in the community. The event typically attracts runners of all ages and abilities, as well as spectators who come out to celebrate the holiday and support the runners. The course is usually a scenic route through the town, and the event often features live music, food, and other festivities, making it a fun and festive celebration for the whole community.'
    },
    {
        id: 'new-bed-5k',
        name: 'New Bedford Half Marathon',
        distance: 'Half Marathon',
        date: 'May 18, 2019',
        location: 'New Bedford, MA',
        description: 'The New Bedford Half Marathon is an annual 13.1-mile (21.1 km) race held in New Bedford, Massachusetts. It is a popular running event in the region, attracting participants from all over the area and beyond. The course typically takes runners through the historic streets and scenic waterfront of New Bedford, offering views of the city\'s unique architecture and natural beauty. The event is known for its challenging and picturesque course, enthusiastic spectators, and festive atmosphere, making it a popular destination for both competitive runners and recreational participants.'        
    },
    {
        id: 'new-bed-track',
        name: 'Seaside Runners Classic',
        distance: 'Track',
        distances: ['100m', '200m', '400m', '800m', '1600m', '3200m', '100mh', '4x400m'],
        date: 'May 18, 2019',
        location: 'Fairhaven, MA',
        description: 'The Seaside Runners Classic is a track meet hosted by the New Bedford Track Club, a non-elite club that is open to all runners. The meet takes place in Fairhaven and features a variety of events for runners of all ages and abilities. The event is known for its friendly and inclusive atmosphere, with a focus on promoting fitness and encouraging participation in the sport of running. With scenic courses, enthusiastic spectators, and a festive atmosphere, the Seaside Runners Classic is a premier event for runners in the South Coast region.'
    }
];

export { races }