// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { races } from '$lib/scripts/races';
import { error } from '@sveltejs/kit';

export const load = ({ params }: any) => {
    const race = races.find((race) => race.id === params.pid);

    // if no race is found, return a 404
    if (!race) {
        throw error(404, 'Not found');
    }
    return {
        props: {
            race
        }
    }

};