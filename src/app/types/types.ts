
export interface Course {
    title?: string;
    subtitle?: string;
    image: string;
}

export interface Content {
    novosCursos: {
        maintitle: string;
        courses: Course[];
    };
    cursosMaisComprados: {
        maintitle: string;
        courses: Course[];
    };
}

