import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { createQuestionRow } from "@/lib/notion";

export async function POST(req: NextRequest) {
  let body: {
    questions?: unknown;
    role?: string;
    roleCustom?: string;
    country?: string;
    preferredLanguage?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    mailingListOptIn?: boolean;
    uiLanguage?: string;
    consentGiven?: boolean;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const {
    questions,
    role = "",
    roleCustom = "",
    country = "",
    preferredLanguage = "",
    firstName = "",
    lastName = "",
    email = "",
    mailingListOptIn = false,
    uiLanguage = "en",
    consentGiven = false,
  } = body;

  if (!consentGiven) {
    return NextResponse.json({ error: "Consent is required" }, { status: 400 });
  }
  if (!Array.isArray(questions) || questions.length === 0) {
    return NextResponse.json({ error: "At least one question is required" }, { status: 400 });
  }
  const questionStrings = (questions as unknown[]).filter(
    (q): q is string => typeof q === "string" && q.trim().length > 0
  );
  if (questionStrings.length === 0) {
    return NextResponse.json({ error: "At least one non-empty question is required" }, { status: 400 });
  }

  const submissionId = uuidv4();
  const submittedAt = new Date().toISOString();

  try {
    await Promise.all(
      questionStrings.map((question) =>
        createQuestionRow({
          questionOriginal: question,
          role: role ?? "",
          roleCustom: roleCustom ?? "",
          country: country ?? "",
          preferredLanguage: preferredLanguage ?? "",
          uiLanguage: uiLanguage ?? "en",
          firstName: firstName ?? "",
          lastName: lastName ?? "",
          email: email ?? "",
          mailingListOptIn: mailingListOptIn ?? false,
          submittedAt,
          submissionId,
        })
      )
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Submission error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
