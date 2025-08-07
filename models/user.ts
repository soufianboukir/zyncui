import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  username?: string;
  email: string;
  role?: 'user' | 'admin'; 
  avatarUrl?: string;
  isPro: boolean;
  proExpiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, unique: true, sparse: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    avatarUrl: { type: String },
    isPro: { type: Boolean, required: true ,default: false },
    proExpiresAt: { type: Date, required: false}
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;