import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

const coursesNormalizer = (data) => {
    const nData = normalize(data, [course]);
    return nData.entities.courses;
};

export default coursesNormalizer;