// Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

// Each person may dislike some other people, and they should not go into the same group. 

// Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

// Return true if and only if it is possible to split everyone into two groups in this way.

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = (N, dislikes) => {
    let nodes = nodeBuilder(N);

    let adj = []
    for (let i = 0; i < N; i++) adj.push([]);
    
    for (const p of dislikes) {
        adj[p[0] - 1].push(p[1] - 1);
        adj[p[1] - 1].push(p[0] - 1);
    }

    for (let i = 0; i < N; i++) {
        if (nodes[i] == -1 && !dfs(adj, nodes, i, 0))
            return false
    }
    return true;


    function dfs(adj, nodes, v, grp) {
        if (nodes[v] == -1) nodes[v] = grp;
        else return nodes[v] == grp;

        for (const n of adj[v]) {
            if (!dfs(adj, nodes, n, 1 - grp)) {
                return false;
            }
        }
        return true;
    }

    function nodeBuilder(n, pre =-1) {
        let nodes = [];
        for (let i = 0; i < n; i++) {
            nodes.push(pre);
        }
        return nodes;
    }
};

