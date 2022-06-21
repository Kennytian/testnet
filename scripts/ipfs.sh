export ipfs_data=/Users/kenny/projects/private/web3/ipfs/data
export ipfs_staging=/Users/kenny/projects/private/web3/ipfs/staging

docker run -d --name ipfs_host -v $ipfs_staging:/export -v $ipfs_data:/data/ipfs -p 4001:4001 -p 127.0.0.1:8088:8080 -p 127.0.0.1:5001:5001 textile/go-ipfs:v0.8.0-m1

docker exec ipfs_host ipfs daemon
docker exec ipfs_host ipfs swarm peers
docker exec ipfs_host ipfs id


docker exec -it ipfs_host sh