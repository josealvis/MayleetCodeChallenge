# Possible Bipartition
## Solution
### Approach 1: Depth-First Search
#### Intuition

It's natural to try to assign everyone to a group. Let's say people in the first group are red, and people in the second group are blue.

If the first person is red, anyone disliked by this person must be blue. Then, anyone disliked by a blue person is red, then anyone disliked by a red person is blue, and so on.

If at any point there is a conflict, the task is impossible, as every step logically follows from the first step. If there isn't a conflict, then the coloring was valid, so the answer would be `true`.

#### Algorithm

Consider the graph on `N` people formed by the given "dislike" edges. We want to check that each connected component of this graph is bipartite.

For each connected component, we can check whether it is bipartite by just trying to coloring it with two colors. How to do this is as follows: color any node red, then all of it's neighbors blue, then all of those neighbors red, and so on. If we ever color a red node blue (or a blue node red), then we've reached a conflict.

``` java
class Solution {
    ArrayList<Integer>[] graph;
    Map<Integer, Integer> color;

    public boolean possibleBipartition(int N, int[][] dislikes) {
        graph = new ArrayList[N+1];
        for (int i = 1; i <= N; ++i)
            graph[i] = new ArrayList();

        for (int[] edge: dislikes) {
            graph[edge[0]].add(edge[1]);
            graph[edge[1]].add(edge[0]);
        }

        color = new HashMap();
        for (int node = 1; node <= N; ++node)
            if (!color.containsKey(node) && !dfs(node, 0))
                return false;
        return true;
    }

    public boolean dfs(int node, int c) {
        if (color.containsKey(node))
            return color.get(node) == c;
        color.put(node, c);

        for (int nei: graph[node])
            if (!dfs(nei, c ^ 1))
                return false;
        return true;
    }
}
```


Complexity Analysis

Time Complexity: `O(N+E)`, where EE is the length of `dislikes`.

Space Complexity: `O(N+E)`.

### other sources: [https://www.youtube.com/watch?v=hWFqtlbnQV8](https://www.youtube.com/watch?v=hWFqtlbnQV8)