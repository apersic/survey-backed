const FirebaseController = require("./FirebaseController");
const config = require("../config");
const firestore = require("firebase/firestore");

const controller = new FirebaseController(config.firebaseConfig);

const getSurveys = async () => {
    try {
        const surveyCollection = firestore.collection(controller.db, "surveys");
        const data = [];

        const snapshot = await firestore.getDocs(surveyCollection);

        snapshot.docs.forEach(document => {
            data.push({ ...document.data(), id: document.id });
        });

        return data;
    } catch (e) {
        return null;
    }
}

// Survey ID is mocked due to there only ever being one survey in DB as of right now.
const saveAnswers = async (payload) => {
    try {
        const answersCollection = firestore.collection(controller.db, "answers");

        const fullPayload = {
            data: {
                relationships: {
                    survey: {
                        data: {
                            type: "surveys",
                            id: "GAOi7YDkTnvMoVhbRV6y"
                        }
                    }
                },
                ...payload
            }
        }

        await firestore.addDoc(answersCollection, fullPayload);

        return fullPayload;
    } catch (e) {
        return null
    }
}

module.exports = {
    getSurveys,
    saveAnswers,
}