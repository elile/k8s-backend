// const WebSocket = require('ws');


// const wss = new WebSocketServer({ port: 8080 });
// const ws = new WebSocket('ws://127.0.0.1:7008/ws');

// wss.on('connection', function connection(ws) {


//     ws.on('message', function message(data) {
//         console.log('received: %s', data);
//     });

//     let timerId = setInterval(() => {
//         ws.send('something');
//     }, 33.33);

//     ws.on('error', clearInterval(timerId));
//     ws.on('close', clearInterval(timerId));

// });

// ws.on('error', console.error);

// ws.on('open', function open() {
//     // ws.send('something');
//     console.log('open...');
// });

// ws.on('message', function message(data) {
//     console.log('received: %s', JSON.stringify(JSON.parse(data), null, 4));
// });


// import {
//     WorkerNode,
//     Deployment,
//     Pod,
//     Service,
//     Ingress,
//     NetworkPolicy,
//     Volume,
//     KubernetesComponent,
//     MasterNode,
//     ApiServer,
//     Scheduler,
//     ControllerManager,
//     Etcd,
//     StatefulSet,
// } from './k8s-model.js';

// // Example Usage
// const masterNode = new MasterNode();
// const workerNode = new WorkerNode();
// const deployment = new Deployment();
// const pod = new Pod();
// const service = new Service();
// const ingress = new Ingress();
// const networkPolicy = new NetworkPolicy();
// const volume = new Volume();
// const statefulSet = new StatefulSet();

// masterNode.describe();
// workerNode.describe();
// deployment.describe();
// pod.describe();
// service.describe();
// ingress.describe();
// networkPolicy.describe();
// volume.describe();
// statefulSet.describe();


const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const main = async () => {
    try {
        const podsRes = await k8sApi.listNamespacedPod('kube-system');
        console.log(JSON.stringify(podsRes.body.items[1], null, 4));
    } catch (err) {
        console.error(err);
    }
};

main();