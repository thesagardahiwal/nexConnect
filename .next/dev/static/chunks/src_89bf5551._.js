(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/firebase/firebaseService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// src/services/firebase/firebaseService.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/database/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm2017.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/services/firebase/firebaseService.ts")}`;
    }
};
;
;
;
;
;
const firebaseConfig = {
    // @ts-ignore
    apiKey: __TURBOPACK__import$2e$meta__.env.VITE_API_KEY || '',
    // @ts-ignore
    authDomain: __TURBOPACK__import$2e$meta__.env.VITE_AUTH_DOMAIN || '',
    // @ts-ignore
    projectId: __TURBOPACK__import$2e$meta__.env.VITE_PROJECT_ID || '',
    // @ts-ignore
    storageBucket: __TURBOPACK__import$2e$meta__.env.VITE_STORAGE_BUCKET || '',
    // @ts-ignore
    messagingSenderId: __TURBOPACK__import$2e$meta__.env.VITE_MESSAGING_SENDER_ID || '',
    // @ts-ignore
    appId: __TURBOPACK__import$2e$meta__.env.VITE_APP_ID || '',
    // @ts-ignore
    measurementId: __TURBOPACK__import$2e$meta__.env.VITE_MEASUREMENT_ID || ''
};
class Firebase {
    static instance = null;
    auth;
    db;
    database;
    storage;
    constructor(){
        if (!Firebase.instance) {
            const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
            this.auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
            this.db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
            this.database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDatabase"])(app);
            this.storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
            Firebase.instance = this;
        }
        // Singleton assignment in JS logic, here we assign to keep TS happy but it relies on static instance
        const instance = Firebase.instance;
        this.auth = instance.auth;
        this.db = instance.db;
        this.database = instance.database;
        this.storage = instance.storage;
        return instance;
    }
    getCurrentUser() {
        return this.auth?.currentUser || null;
    }
    getCurrentUserId() {
        return this.getCurrentUser()?.uid || null;
    }
    async safeUpdateDisplayName(name) {
        try {
            const user = this.getCurrentUser();
            if (!user || !name) return false;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProfile"])(user, {
                displayName: name
            });
            return true;
        } catch (e) {
            console.warn('safeUpdateDisplayName failed', e);
            return false;
        }
    }
    async login({ room_id, username, isOwner }) {
        if (!room_id || !username) return false;
        try {
            const roomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id);
            const snapDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(roomRef);
            if (isOwner && !snapDoc.exists()) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAnonymously"])(this.auth);
                const uid = this.getCurrentUserId();
                if (!uid) return false;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(roomRef, {
                    username,
                    id: uid,
                    participants: [
                        username
                    ],
                    isOpen: false
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${room_id}/users/${uid}`), {
                    username,
                    id: uid
                });
                await this.safeUpdateDisplayName(username);
                return true;
            }
            if (snapDoc.exists() && snapDoc.data()?.isOpen) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInAnonymously"])(this.auth);
                const uid = this.getCurrentUserId();
                if (!uid) return false;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${room_id}/users/${uid}`), {
                    username,
                    id: uid
                });
                await this.safeUpdateDisplayName(username);
                return true;
            }
        } catch (error) {
            console.error('login error:', error);
            return false;
        }
        return false;
    }
    async validateRoomId(room_id) {
        if (!room_id) return false;
        try {
            const [dbSnap, rtdbSnap] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id)),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), room_id))
            ]);
            return !!dbSnap.exists() && !!rtdbSnap.exists();
        } catch (e) {
            console.error('validateRoomId error:', e);
            return false;
        }
    }
    async validateUserSession(room_id, id = null) {
        const uid = id || this.getCurrentUserId();
        if (!room_id || !uid) return false;
        try {
            const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${room_id}/users/${uid}`));
            if (!userSnap.exists() && this.getCurrentUser()) {
                try {
                    // Check if current user object exists before deleting
                    const currentUser = this.getCurrentUser();
                    if (currentUser) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteUser"])(currentUser);
                    }
                } catch (e) {
                    console.warn('deleteUser failed in validateUserSession', e);
                }
                return false;
            }
            return true;
        } catch (e) {
            console.error('validateUserSession error:', e);
            return false;
        }
    }
    async checkUsernameAvailability(room_id, username) {
        if (!room_id || !username) return false;
        try {
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${room_id}/users`));
            if (!snapshot.exists()) return true;
            let available = true;
            snapshot.forEach((userSnap)=>{
                const u = userSnap.val();
                if (!u) return;
                if (u.username === username) {
                    available = u.id === this.getCurrentUserId();
                    return true;
                }
            });
            return available;
        } catch (e) {
            console.error('checkUsernameAvailability error:', e);
            return false;
        }
    }
    async createRoomTransaction(username) {
        if (!username) return null;
        try {
            const newRoomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["push"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), 'rooms'));
            const roomId = newRoomRef.key;
            if (!roomId) return null;
            const success = await this.login({
                room_id: roomId,
                username,
                isOwner: true
            });
            return success ? roomId : null;
        } catch (e) {
            console.error("createRoomTransaction error", e);
            return null;
        }
    }
    async sendAiMessage({ message, id, username, roomId, time }) {
        if (!message || !roomId) return false;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["push"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${roomId}/ai-messages`), {
                message,
                id,
                username,
                time,
                user: true
            });
            return true;
        } catch (e) {
            console.error('sendAiMessage error:', e);
            return false;
        }
    }
    async logout({ room_id, isOwner }) {
        const uid = this.getCurrentUserId();
        if (!room_id || !uid) return;
        try {
            const roomDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id));
            const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${room_id}/users/${uid}`));
            if (!roomDoc.exists() && !userSnap.exists()) {
                try {
                    const u = this.getCurrentUser();
                    if (u) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteUser"])(u);
                } catch (e) {
                    console.warn('deleteUser failed (maybe needs recent auth)', e);
                }
                return;
            }
            const currentUser = this.getCurrentUser();
            if (isOwner) {
                await Promise.allSettled([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id)).catch((e)=>console.warn('deleteDoc failed', e)),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, room_id)).catch((e)=>console.warn('rtdbRemove failed', e)),
                    this.deleteFiles(room_id).catch((e)=>console.warn('deleteFiles failed', e)),
                    (async ()=>{
                        try {
                            if (currentUser) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteUser"])(currentUser);
                        } catch (e) {
                            console.warn('deleteUser failed (owner logout)', e);
                        }
                    })()
                ]);
                return;
            }
            await Promise.allSettled([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${room_id}/users/${uid}`)).catch((e)=>console.warn('rtdbRemove user failed', e)),
                (async ()=>{
                    try {
                        if (currentUser) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteUser"])(currentUser);
                    } catch (e) {
                        console.warn('deleteUser failed (non-owner logout)', e);
                    }
                })()
            ]);
        } catch (error) {
            console.error('logout error:', error);
        }
    }
    async allowParticipants(room_id, callback, allow) {
        if (!room_id) return false;
        try {
            const snapShot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id));
            if (!snapShot.exists()) return false;
            const uid = this.getCurrentUserId();
            if (uid && uid === snapShot.data()?.id) {
                const newIsOpen = !allow;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id), {
                    isOpen: newIsOpen
                });
                try {
                    callback?.(newIsOpen);
                } catch (e) {
                    console.warn('allowParticipants callback error', e);
                }
                return true;
            }
        } catch (e) {
            console.error('allowParticipants error:', e);
        }
        return false;
    }
    async isOwnerLogout(room_id) {
        if (!room_id) return false;
        const uid = this.getCurrentUserId();
        if (!uid) return false;
        try {
            const roomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id);
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(roomRef);
            if (docSnap.exists()) {
                if (docSnap.data()?.id === uid) {
                    await this.logout({
                        room_id,
                        isOwner: true
                    });
                    return true;
                } else {
                    await this.logout({
                        room_id,
                        isOwner: false
                    });
                    return false;
                }
            }
            try {
                const u = this.getCurrentUser();
                if (u) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteUser"])(u);
            } catch (e) {
                console.warn('deleteUser failed in isOwnerLogout', e);
            }
            return false;
        } catch (e) {
            console.error('isOwnerLogout error:', e);
            return false;
        }
    }
    async getRoomOwner(room_id) {
        if (!room_id) return '';
        try {
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id));
            return docSnap.exists() ? docSnap.data()?.username || '' : '';
        } catch (e) {
            console.error('getRoomOwner error:', e);
            return '';
        }
    }
    async getCurrentUserDetails(room_id) {
        const uid = this.getCurrentUserId();
        if (!room_id || !uid) return '';
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${room_id}/users/${uid}`));
            return result.exists() ? result.val()?.username || '' : '';
        } catch (e) {
            console.error('getCurrentUserDetails error:', e);
            return '';
        }
    }
    async isOwner(room_id) {
        const uid = this.getCurrentUserId();
        if (!room_id || !uid) return false;
        try {
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id));
            return docSnap.exists() && docSnap.data()?.id === uid;
        } catch (e) {
            console.error('isOwner error:', e);
            return false;
        }
    }
    onValueChange(room_id, callback) {
        const id = this.getCurrentUserId();
        if (!id || !room_id) return;
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${room_id}/users/${id}`), (snapShot)=>{
                const username = snapShot.val()?.username;
                if (!username) {
                    try {
                        callback?.(id);
                    } catch (e) {
                        console.warn('onValueChange callback failed', e);
                    }
                }
            }, {
                onlyOnce: true
            });
        } catch (e) {
            console.error('onValueChange error:', e);
        }
    }
    async removeParticipant(room_id, id) {
        if (!room_id || !id) return false;
        try {
            if (!await this.isOwner(room_id)) return false;
            const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(this.db, 'rooms', room_id));
            const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${room_id}/users/${id}`));
            if (!docSnap.exists() || !userSnap.exists()) return false;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${room_id}/users/${id}`));
            return true;
        } catch (e) {
            console.error('removeParticipant error:', e);
            return false;
        }
    }
    setupPresence(room_id, user_id) {
        if (!room_id || !user_id) return;
        try {
            const userStatusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${room_id}/users/${user_id}`);
            const onDisconnectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDisconnect"])(userStatusRef);
            onDisconnectRef.remove().catch((err)=>{
                console.warn('Failed to attach onDisconnect listener', err);
            });
        } catch (e) {
            console.error('setupPresence error:', e);
        }
    }
    subscribeToMessages(room_id, callback) {
        if (!room_id || !callback) return ()=>{};
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${room_id}/messages`);
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onChildAdded"])(messagesRef, (snapshot)=>{
            const data = snapshot.val();
            if (data) {
                callback(data);
            }
        });
        return unsubscribe;
    }
    subscribeToRoomUsers(room_id, { onMemberJoined, onMemberLeft, onKick } = {}) {
        if (!room_id) return ()=>{};
        const usersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${room_id}/users`);
        const unsubAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onChildAdded"])(usersRef, (snapshot)=>{
            const val = snapshot.val();
            if (val && onMemberJoined) onMemberJoined(val);
        });
        const unsubRemoved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onChildRemoved"])(usersRef, (snapshot)=>{
            const val = snapshot.val();
            if (val) {
                if (onMemberLeft) onMemberLeft(val);
                if (onKick) onKick(val);
            }
        });
        return ()=>{
            unsubAdded();
            unsubRemoved();
        };
    }
    async sendMessage({ message, id, username, roomId, time, download = null }) {
        if (!message || !id || !username || !roomId || !time) return false;
        if (this.getCurrentUserId() !== id) return false;
        try {
            const messages = {
                message,
                id,
                username,
                time,
                download
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["push"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${roomId}/messages`), messages);
            return true;
        } catch (e) {
            console.error('sendMessage error:', e);
            return false;
        }
    }
    subscribeToAIMessages(room_id, callback) {
        if (!room_id || !callback) return ()=>{};
        const aiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${room_id}/ai-messages`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onChildAdded"])(aiRef, (snapshot)=>{
            const data = snapshot.val();
            if (data) callback(data);
        });
    }
    async getMembers(room_id, callbackMember) {
        if (!room_id || typeof callbackMember !== 'function') return;
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["child"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database), `${room_id}/users`));
            if (!res.exists()) return;
            const list = [];
            res.forEach((snap)=>{
                const { username, id } = snap.val() || {};
                if (username && id) list.push({
                    username,
                    id
                });
            });
            callbackMember(list);
        } catch (error) {
            console.error('getMembers error:', error);
        }
    }
    sendFile(sender, filename, content, room_id, time, callback, onProgress) {
        if (!sender || !filename || !content || !room_id || !time) return false;
        try {
            let fileContent = content;
            if (content instanceof ArrayBuffer) {
                fileContent = new Uint8Array(content);
            } else if (ArrayBuffer.isView(content)) {
                fileContent = new Uint8Array(content.buffer);
            }
            const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.storage, `${room_id}/${time} time:${filename}`);
            const uploadTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadBytesResumable"])(fileRef, fileContent);
            uploadTask.on('state_changed', (snapshot)=>{
                const progress = snapshot.bytesTransferred / (snapshot.totalBytes || 1) * 100;
                onProgress?.({
                    loaded: snapshot.bytesTransferred,
                    total: snapshot.totalBytes,
                    lengthComputable: !!snapshot.totalBytes,
                    progress
                });
            }, (error)=>{
                console.error('upload error:', error);
            }, async ()=>{
                try {
                    const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])(uploadTask.snapshot.ref);
                    try {
                        callback?.(url);
                    } catch (e) {
                        console.warn('sendFile callback failed', e);
                    }
                } catch (e) {
                    console.error('getDownloadURL failed', e);
                }
            });
            return true;
        } catch (e) {
            console.error('sendFile error:', e);
            return false;
        }
    }
    async getMediaFiles(room_id, callback, setIsLoading) {
        if (!room_id) {
            setIsLoading?.(false);
            return;
        }
        try {
            setIsLoading?.(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listAll"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.storage, room_id));
            if (!res || !res.items || res.items.length === 0) {
                callback?.([]);
                setIsLoading?.(false);
                return;
            }
            const promises = res.items.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDownloadURL"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.storage, item.fullPath)).then((url)=>({
                        filename: item.name,
                        downloadUrl: url
                    })).catch((err)=>{
                    console.warn(`Failed to get URL for ${item.name}:`, err);
                    return null;
                }));
            const results = await Promise.allSettled(promises);
            const list = results.filter((r)=>r.status === 'fulfilled' && !!r.value).map((r)=>r.value);
            callback?.(list);
        } catch (e) {
            console.error('getMediaFiles error:', e);
            callback?.([]);
        } finally{
            setIsLoading?.(false);
        }
    }
    async getFileCount(room_id) {
        if (!room_id) return 0;
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listAll"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.storage, room_id));
            return res?.items?.length || 0;
        } catch (e) {
            console.error('getFileCount error:', e);
            return 0;
        }
    }
    async deleteFiles(room_id) {
        if (!room_id) return false;
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listAll"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.storage, room_id));
            if (!res?.items || res.items.length === 0) return true;
            await Promise.allSettled(res.items.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteObject"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.storage, item.fullPath)).catch((err)=>{
                    console.warn('deleteObject failed for', item.fullPath, err);
                })));
            return true;
        } catch (e) {
            console.error('deleteFiles error:', e);
            return false;
        }
    }
    onAuthStateChanged(callback) {
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(this.auth, callback);
        } catch (e) {
            console.error('onAuthStateChanged error:', e);
        }
    }
    async joinScreenShare(roomId, peerId) {
        if (!roomId || !peerId) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${roomId}/screenshare/peers/${peerId}`), {
                id: peerId,
                timestamp: Date.now()
            });
        } catch (e) {
            console.error("joinScreenShare error", e);
        }
    }
    async announceCall(roomId, username) {
        if (!roomId || !username) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${roomId}/screenshare/active_call`), {
                username,
                timestamp: Date.now()
            });
        } catch (e) {
            console.error("announceCall error", e);
        }
    }
    subscribeToScreenSignaling(roomId, { onNewUser, onCall, onStopCall } = {}) {
        if (!roomId) return ()=>{};
        const peersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${roomId}/screenshare/peers`);
        const activeCallRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${roomId}/screenshare/active_call`);
        const unsubPeers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onChildAdded"])(peersRef, (snapshot)=>{
            const val = snapshot.val();
            if (val && val.id && onNewUser) {
                onNewUser(val.id);
            }
        });
        const unsubCall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(activeCallRef, (snapshot)=>{
            const val = snapshot.val();
            if (val && onCall) {
                onCall(val);
            } else if (!val && onStopCall) {
                onStopCall();
            }
        });
        return ()=>{
            unsubPeers();
            unsubCall();
        };
    }
    async stopCall(roomId) {
        if (!roomId) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(this.database, `${roomId}/screenshare/active_call`));
        } catch (e) {
            console.error("stopCall error", e);
        }
    }
}
const __TURBOPACK__default__export__ = Firebase;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/FirebaseContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirebaseProvider",
    ()=>FirebaseProvider,
    "useFirebase",
    ()=>useFirebase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/context/FirebaseContext.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$firebaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/firebase/firebaseService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const FirebaseContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const FirebaseProvider = ({ children })=>{
    // Use useMemo ensures singleton instance is respected across re-renders if needed,
    // though new Firebase() is logically strictly valid too if internal static check works.
    const firebase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$firebase$2f$firebaseService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FirebaseContext.Provider, {
        value: firebase,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/FirebaseContext.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FirebaseProvider;
const useFirebase = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
};
_s(useFirebase, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "FirebaseProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/icons/loader.svg.mjs { IMAGE => \"[project]/src/assets/icons/loader.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript) <export default as loader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/icons/loader.svg.mjs { IMAGE => "[project]/src/assets/icons/loader.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
}),
"[project]/src/hooks/DisplayMsg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const DisplayMsg = ({ message, setMessage })=>{
    if (setMessage) {
        setTimeout(()=>setMessage(''), 3000);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-red-400 bg-slate-100 w-full h-fit rounded-md flex px-2 p-1 justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: message
        }, void 0, false, {
            fileName: "[project]/src/hooks/DisplayMsg.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/hooks/DisplayMsg.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DisplayMsg;
const __TURBOPACK__default__export__ = DisplayMsg;
var _c;
__turbopack_context__.k.register(_c, "DisplayMsg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/lobby/JoinRoomForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FirebaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/FirebaseContext.tsx [app-client] (ecmascript)");
// import { useSocket } from '../../context/SocketContext.jsx';
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/assets/icons/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__loader$3e$__ = __turbopack_context__.i('[project]/src/assets/icons/loader.svg.mjs { IMAGE => "[project]/src/assets/icons/loader.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript) <export default as loader>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$DisplayMsg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/DisplayMsg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$JoinFull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/JoinFull.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function JoinGroup() {
    _s();
    // const socket = useSocket();
    const firebase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FirebaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirebase"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [roomID, setRoomID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const showMessage = (msg)=>{
        setMessage(msg);
        setLoading(false);
    };
    const loginMember = async ()=>{
        try {
            const roomExists = await firebase.validateRoomId(roomID);
            if (!roomExists) return showMessage("Room does not exist!");
            const nameAvailable = await firebase.checkUsernameAvailability(roomID, username);
            if (!nameAvailable) return showMessage("This username is already taken. Try another one.");
            const response = await firebase.login({
                room_id: roomID,
                username,
                isOwner: false
            });
            if (!response) return showMessage("Room is not open or expired!");
            // Navigate to chat
            router.push(`/chat/${roomID}`);
        } catch (error) {
            showMessage("Something went wrong. Please try again.");
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (loading) return showMessage("Please wait...");
        // Remove fixed 6-char length check to allow dynamic IDs
        if (roomID.trim().length < 3) return showMessage("Invalid Room ID.");
        if (username.trim().length < 3) return showMessage("Name must be at least 3 characters.");
        setLoading(true);
        loginMember();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinGroup.useEffect": ()=>{
            if (message.length > 0) {
                const timeout = setTimeout({
                    "JoinGroup.useEffect.timeout": ()=>setMessage('')
                }["JoinGroup.useEffect.timeout"], 4000);
                return ({
                    "JoinGroup.useEffect": ()=>clearTimeout(timeout)
                })["JoinGroup.useEffect"];
            }
        }
    }["JoinGroup.useEffect"], [
        message
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4 items-center w-full justify-center mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "username",
                                className: "sr-only",
                                children: "Username"
                            }, void 0, false, {
                                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "username",
                                type: "text",
                                className: "rounded-md border bg-transparent text-slate-100 w-full p-3",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                placeholder: "Enter your name",
                                autoComplete: "off",
                                disabled: loading,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "roomID",
                                className: "sr-only",
                                children: "Room ID"
                            }, void 0, false, {
                                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "roomID",
                                type: "text",
                                className: "rounded-md border mt-2 bg-transparent text-slate-100 w-full p-3",
                                value: roomID,
                                onChange: (e)=>setRoomID(e.target.value),
                                placeholder: "Enter Room ID",
                                autoComplete: "off",
                                // maxLength={6}
                                disabled: loading,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "rounded-md w-full border h-[50px] text-white flex justify-center items-center backdrop-blur-sm hover:bg-white/20 transition-all p-3",
                        disabled: loading,
                        "aria-busy": loading,
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Joining..."
                                }, void 0, false, {
                                    fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$icons$2f$loader$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__$3c$export__default__as__loader$3e$__["loader"],
                                    width: 20,
                                    height: 20,
                                    alt: "loading spinner"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$JoinFull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[90vw] top-10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$DisplayMsg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    message: message,
                    setMessage: setMessage
                }, void 0, false, {
                    fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/lobby/JoinRoomForm.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(JoinGroup, "AOgDbAQ/j2QGRu3QwSpA7YjK+YU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FirebaseContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirebase"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = JoinGroup;
const __TURBOPACK__default__export__ = JoinGroup;
var _c;
__turbopack_context__.k.register(_c, "JoinGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_89bf5551._.js.map