
// ------------------------
// API UTILITIES
// ------------------------
export const getLoader = async ({ resource, context }) => {
    const { db } = context;
    const dbResourceName = resource.charAt(0).toUpperCase() + resource.slice(1);
    if (!db[dbResourceName]) {
        throw new Error(`Resource "${resource}" not found in context.db`);
    }
    const data = await db[dbResourceName].findMany();
    return { [resource]: data };
}
// -------- x --------

export default { getLoader }