export function addLikes(likeCounts) {
    return {
        type: 'ADD_LIKE',
        payload: likeCounts,

    }
}