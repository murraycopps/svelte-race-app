type Race = {
    id: string;
    name: string;
    distance: string;
    date: string;
    location: string;
    description: string;
    distances?: string[];
    distanceAway: number;
};

export type { Race }